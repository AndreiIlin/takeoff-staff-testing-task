export interface IContact {
  id: number;
  firstName: string;
  lastName?: string;
  image?: string;
  phone: string;
}

export interface IModalProps {
  handleClose: () => void;
}
