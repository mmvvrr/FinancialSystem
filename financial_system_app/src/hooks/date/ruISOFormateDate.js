
export default function ruISOFormateDate (date) {
  return date.toISOString().slice(0, 10)
}