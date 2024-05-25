
export default function useSplitNameToFullName({surname, name, patronymic}) {
  let fullName = surname

  if (name) fullName += " "+ name
  if (patronymic) fullName += " "+ patronymic

  return fullName
}