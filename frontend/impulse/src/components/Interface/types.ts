export interface TaskData {
  _id: string;
  title: string;
  desc: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ToggleFormProps {
  toggleForm: () => void;
}
