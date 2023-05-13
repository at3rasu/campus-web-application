import { resumeStore } from ".."


export const createResume = async (name, number, city, aboutYou, vacancy, workExamples, educational) => {
    return resumeStore.createResume(name, number, city, aboutYou, vacancy, workExamples, educational)
}

export const getResumeByUser = async() => {
    return resumeStore.getResumeByUser()
}