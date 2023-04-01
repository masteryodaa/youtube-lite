const calculatePublishedAt = (publishedAt) => {
    const date = new Date(publishedAt);
    const now = new Date();
    const diff = now - date;
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    const diffInHours = diff / (1000 * 60 * 60);
    const diffInMinutes = diff / (1000 * 60);
    const diffInSeconds = diff / (1000);
    if (diffInDays > 1) {
      return `${Math.floor(diffInDays)} days ago`;
    } else if (diffInHours > 1) {
      return `${Math.floor(diffInHours)} hours ago`;
    } else if (diffInMinutes > 1) {
      return `${Math.floor(diffInMinutes)} minutes ago`;
    } else {
      return `${Math.floor(diffInSeconds)} seconds ago`;
    }
  };

  export default calculatePublishedAt;