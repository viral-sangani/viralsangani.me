export function getReadingMetrics(content: string) {
  // Count words
  const words = content.trim().split(/\s+/).length;

  // Calculate reading time (average reading speed: 200 words per minute)
  const readingTimeMinutes = Math.ceil(words / 200);

  return {
    wordCount: words,
    readingTime: readingTimeMinutes,
  };
}
