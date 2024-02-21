import './timeline.css';

interface Event {
  title: string;
  desc: string;
  date: string;
  category: {
    tag: string;
    color: string;
  };
}

const TimelineItem: React.FC<Event> = ({ title, desc, date, category }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: category.color }}>
        {category.tag}
      </span>
      <time>{date}</time>
      <h2>{title}</h2>
      <p>{desc}</p>
      <span className="circle" />
    </div>
  </div>
);

interface TimelineEventsProps {
  events: Event[];
}

const TimelineSection: React.FC<TimelineEventsProps> = ({ events }) =>
  events.length > 0 && (
    <div className="timeline-container z-10 sm:mx-4">
      {events.map((event, idx) => (
        <TimelineItem title={event.title} desc={event.desc} date={event.date} category={event.category} key={idx} />
      ))}
    </div>
  );

export default function Timeline() {
  const events: Event[] = [
    {
      title: 'Bachelors in Computer and Software Engineering',
      desc: 'During this time, I developed the crucial skills to succeed as software and game developer , well the necessary soft skills to be competent and be  successful as team. I was able to surpass every academic and personal challenge, demonstrating both my commitment and resilience.',
      date: 'February 2022',
      category: {
        tag: 'Education',
        color: '#018f69',
      },
    },
    {
      title: 'Masters in Computer and Software Engineering',
      desc: 'Following my bachelors, I reinforced my already learned skills as well as the necessary skills to perform a detailed research on the topic of my masters thesis. During this time I also had the opportunity to develop a project for Vestas during one of my classes, as well as help organize the Talk a Bit event for said year.',
      date: 'July 2023',
      category: {
        tag: 'Education',
        color: '#018f69',
      },
    },
  ];

  return <TimelineSection events={events} />;
}
