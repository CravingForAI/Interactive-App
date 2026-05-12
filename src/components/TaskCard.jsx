function TaskCard({ title, description, details }) {
  return (
    <article className="task-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </article>
  )
}

export default TaskCard
