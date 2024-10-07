import { RootState } from "@/store/store";
import React from "react";


export interface FormField {
    name: string;
    label: string;
    placeholder: string;
    componentType: string;
    type: string;
    required?: boolean;
}

export interface RegisterInputs {
    userName: string,
    email: string,
    password: string
}

export interface LoginInputs {
    email: string,
    password: string
}

export interface FormController {
    formControlls: FormField[],
    formData: any,
    setFormData: (data: any) => void,
    onSumitText: string,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    loading?: boolean
}

export interface RegisterResponse {
    success: boolean;
    message: string;
}

export interface AsyncThunkConfig {
    state: RootState;
    rejectValue: string; 
};