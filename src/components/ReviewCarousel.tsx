import { useCallback, useEffect, useMemo, useRef, type FocusEvent, type KeyboardEvent } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import type { Prospect, PublicReview } from '../data/prospect';
import './ReviewCarousel.css';

type Props = {
  review: Prospect['review'];
};

const initials = (name: string): string => name
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part.charAt(0).toUpperCase())
  .join('');

export default function ReviewCarousel({ review }: Props) {
  const hasReviews = review.reviews.length > 0;
  const reducedMotion = useRef(false);
  const pointerPaused = useRef(false);
  const focusPaused = useRef(false);
  const autoScroll = useMemo(() => AutoScroll({
    playOnInit: true,
    speed: 0.7,
    startDelay: 0,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnFocusIn: false,
  }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    loop: true,
  }, [autoScroll]);

  const repeatCount = hasReviews ? Math.max(3, Math.ceil(12 / review.reviews.length)) : 0;
  const slides = Array.from({ length: repeatCount }, (_, repeatIndex) => review.reviews.map((item, itemIndex) => ({
    item,
    itemIndex,
    repeatIndex,
  }))).flat();

  const scrollPrevious = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const syncPlayback = useCallback(() => {
    const plugin = emblaApi?.plugins().autoScroll;
    if (!plugin) return;
    if (reducedMotion.current || pointerPaused.current || focusPaused.current || document.hidden) plugin.stop();
    else plugin.play(0);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return undefined;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => {
      reducedMotion.current = motionQuery.matches;
      syncPlayback();
    };
    syncMotionPreference();
    motionQuery.addEventListener('change', syncMotionPreference);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      motionQuery.removeEventListener('change', syncMotionPreference);
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, [emblaApi, syncPlayback]);

  const handleFocusPause = (event: FocusEvent<HTMLDivElement>, paused: boolean) => {
    if (!paused && event.currentTarget.contains(event.relatedTarget)) return;
    focusPaused.current = paused;
    syncPlayback();
  };

  const handleKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollPrevious();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollNext();
    }
  };

  const renderReview = (item: PublicReview) => (
    <article className="review-quote-card">
      <div className="review-stars" aria-label={`${item.rating} out of 5 stars`}>
        <span aria-hidden="true">{'★'.repeat(Math.round(item.rating))}</span>
      </div>
      {item.excerpt ? (
        <blockquote><p>“{item.excerpt}”</p></blockquote>
      ) : (
        <div className="review-rating-only">
          <strong>Five-star rating</strong>
          <span>No written comment was left.</span>
        </div>
      )}
      <footer>
        <span className="review-avatar" aria-hidden="true">{initials(item.reviewerName)}</span>
        <span><strong>{item.reviewerName}</strong><small>{item.relativeDate} · Google Maps</small></span>
      </footer>
    </article>
  );

  return (
    <section className="section review-carousel-section" id="reviews" aria-labelledby="review-carousel-heading">
      <div className="container review-carousel-intro">
        <div className="review-carousel-copy">
          <p className="eyebrow-simple">{hasReviews ? 'Words from local customers' : 'Review source required'}</p>
          <h2 id="review-carousel-heading">{review.heading}</h2>
        </div>
        <div className="review-aggregate" aria-label={hasReviews ? `${review.rating} out of 5 stars from ${review.count} public reviews` : 'No review snapshot added to this template'}>
          <strong>{hasReviews ? review.rating.toFixed(1) : '—'}</strong>
          <span aria-hidden="true">{hasReviews ? '★★★★★' : 'SOURCE FIRST'}</span>
          <small>{hasReviews ? `${review.count} Google Maps reviews` : 'Add a verified public snapshot'}</small>
        </div>
      </div>

      {hasReviews && (
        <div className="container review-carousel-toolbar">
          <a href={review.sourceUrl} target="_blank" rel="noreferrer">
            View Google Maps listing <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      )}

      {hasReviews ? (
        <>
          <div
            className="review-carousel-viewport"
            ref={emblaRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Public customer reviews"
            tabIndex={0}
            onKeyDown={handleKeys}
            onMouseEnter={() => { pointerPaused.current = true; syncPlayback(); }}
            onMouseLeave={() => { pointerPaused.current = false; syncPlayback(); }}
            onFocusCapture={(event) => handleFocusPause(event, true)}
            onBlurCapture={(event) => handleFocusPause(event, false)}
          >
            <div className="review-carousel-track">
              {slides.map(({ item, itemIndex, repeatIndex }) => {
                const duplicate = repeatIndex > 0;
                return (
                  <div
                    className="review-carousel-slide"
                    key={`${itemIndex}-${repeatIndex}`}
                    role={duplicate ? undefined : 'group'}
                    aria-roledescription={duplicate ? undefined : 'slide'}
                    aria-label={duplicate ? undefined : `${itemIndex + 1} of ${review.reviews.length}`}
                    aria-hidden={duplicate ? true : undefined}
                  >
                    {renderReview(item)}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="container review-carousel-hint">Hover or focus to pause. Drag, swipe, or use the left and right arrow keys to explore.</p>
        </>
      ) : (
        <div className="container review-empty-state">
          <strong>Add real review proof before delivery.</strong>
          <p>Use short exact excerpts from the business’s public Google Maps or Facebook reviews, preserve the reviewer name and date, and link the full source.</p>
        </div>
      )}
    </section>
  );
}
