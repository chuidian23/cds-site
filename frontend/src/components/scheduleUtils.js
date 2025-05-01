export const validateSchedule = (schedule) => {
  if (!Array.isArray(schedule)) return [];
  return schedule.filter(
    (session) => session.date || (session.start_date && session.end_date)
  );
};
