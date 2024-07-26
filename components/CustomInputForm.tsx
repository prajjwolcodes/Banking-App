import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema("sign-up")

interface CustomInputFormProps {
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    control: Control<z.infer<typeof formSchema>>
}

const CustomInputForm = ({ name, label, placeholder, control }: CustomInputFormProps) => {
    return (
        <div>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <div className="form-item">
                        <FormLabel className="form-label">
                            {label}
                        </FormLabel>
                        <div className="flex w-full flex-col">
                            <FormControl>
                                <Input
                                    placeholder={placeholder}
                                    className="input-class"
                                    type={name === 'password' ? 'password' : 'text'}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="form-message mt-2" />
                        </div>
                    </div>
                )}
            />
        </div>
    )
}

export default CustomInputForm