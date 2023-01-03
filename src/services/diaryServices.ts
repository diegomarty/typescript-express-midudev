import { DiaryEntry, NonSensitiveDiaryEntry } from '../types'
import diaryData from './diaries.json'
// esto popdria ser un fetch a una base de datos

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesNonSensitive = (): NonSensitiveDiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
