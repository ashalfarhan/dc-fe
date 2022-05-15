import { createContext } from 'react'
import { QuizContextValues } from './types'

export const QuizContext = createContext<QuizContextValues | null>(null)
