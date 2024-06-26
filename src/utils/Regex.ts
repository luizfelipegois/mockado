export const regexUserName = /^[a-z0-9]+$/
export const regexFirstName = /^[A-Za-z]+$/
export const regexFullName = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/
export const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const regexPasswordDefault =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?;/&]).{8,}$/
export const regexPasswordWithLetters = /^[a-z]+$/
export const regexPasswordWithCapitalLetters = /^[A-Z]+$/
export const regexPasswordWithNumbers = /^[0-9]+$/
export const regexPasswordWithSpecialCharacters = /[@$!%*?;/&]/
export const regexYYYY_MM_DD = /^\d{4}-\d{2}-\d{2}$/
export const regexDD_MM_YYYY = /^\d{2}\/\d{2}\/\d{4}$/
export const regexMM_DD_YYYY = /^\d{2}\/\d{2}\/\d{4}$/
export const regexMMM_DD_YYYY = /^[a-zA-Z]{3}\s\d{2},\s\d{4}$/
export const regexDD_MMM_YYYY = /^\d{2}\s[a-zA-Z]{3}\s\d{4}$/
export const regexYYYY_MM_DD_Slash = /^\d{4}\/\d{2}\/\d{2}$/
export const regexYYYY_MM_DD_HH_mm_ss = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/
export const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
export const regexSSN = /^\d{3}-\d{2}-\d{4}$/
export const regexSIN = /^\d{3}-\d{3}-\d{3}$/
export const regexPhoneBRL = /^\+\d{2}\s\d{2}\s\d{5}-\d{4}$/
export const regexPhoneEUA = /^\+\d \d{3} \d{3}-\d{4}$/
export const regexCompleteAddress = /^(?=.*[A-Za-z0-9].*[^\s])[\s\S]{1,100}$/
export const regexZipCode =
  /^(\d{5}-\d{4}|\d{5}|\d{2}\.\d{3}-\d{3}|\d{5}-\d{3})$/
export const regexCity = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ\s]+)*$/
