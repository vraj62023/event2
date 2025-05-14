// app/timeline/layout.js
import StarBackground from '@/components/StarBackground';
import '@/styles/timeline.css'; // Optional: shared CSS


export default function TimelineLayout({ children }) {
  return (
    <div className="timeline-page">
      <StarBackground />
   
      {children}
    </div>
  );
}
