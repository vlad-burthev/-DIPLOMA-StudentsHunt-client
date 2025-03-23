export interface ISignUpCompanyData {
  title: string;
  phone: string;
  egrpou: number | null;
  photo: null | File;
  description: string;
  email: string;
  password: string;
}

export interface ResponseError {
  data: {
    code: string;
    message: string;
    status: number;
    errors?: { msg: string }[];
  };
  status: number;
}

export interface recruiterListItem {
  id: string;
  email: string;
  name: string;
  surname: string;
  photo: string;
  date: string;
}
