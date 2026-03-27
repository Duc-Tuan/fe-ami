import { memo, useMemo } from "react";

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  // Chuyển đổi URL watch thành embed URL
  const embedUrl = useMemo(() => {
    // Nếu đã là embed URL thì giữ nguyên
    if (videoId.includes('/embed/')) {
      return videoId;
    }
    
    // Trích xuất video ID từ URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = videoId.match(regExp);
    const id = match && match[2].length === 11 ? match[2] : null;
    
    if (id) {
      // Nếu có playlist, giữ lại tham số list
      const listMatch = videoId.match(/[&?]list=([^&]+)/);
      const listId = listMatch ? listMatch[1] : null;
      
      if (listId) {
        return `https://www.youtube.com/embed/${id}?list=${listId}`;
      }
      return `https://www.youtube.com/embed/${id}`;
    }
    
    // Nếu không phải URL, coi như đã là videoId
    return `https://www.youtube.com/embed/${videoId}`;
  }, [videoId]);

  return (
    <div className="relative w-full h-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default memo(YouTubeEmbed);