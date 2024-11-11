// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'llama3-8b-8192',
    label: 'Llama 3 8B',
    apiIdentifier: 'llama3-8b-8192',
    description: 'Efficient model suitable for general tasks with an 8k context window.',
  },
  {
    id: 'llama3-70b-8192',
    label: 'Llama 3 70B',
    apiIdentifier: 'llama3-70b-8192',
    description: 'High-capacity model for complex tasks with an 8k context window.',
  },
  {
    id: 'llama3.1-405b-128k',
    label: 'Llama 3.1 405B',
    apiIdentifier: 'llama3.1-405b-128k',
    description: 'Latest model with extensive capabilities and a 128k context window.',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'llama3-8b-8192';
