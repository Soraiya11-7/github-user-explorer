import { useEffect, useCallback } from 'react';
import LoadingSpinner from '../LoadingSpinner';

const InfiniteScroll = ({children, loading, hasMore, onLoadMore, loadingComponent, endMessage}) => {
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      onLoadMore();
    }
  }, [loading, hasMore, onLoadMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div>
      {children}
      {loading && (loadingComponent || <LoadingSpinner />)}
      {!loading && !hasMore && endMessage && (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400">
          {endMessage}
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;