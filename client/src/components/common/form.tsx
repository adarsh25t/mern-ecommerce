import { FormField, FormController } from '@/config/types'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ButtonSpinner from './ButtonSpinner'

function CommonForm({
    formControlls,
    formData,
    setFormData,
    onSumitText,
    onSubmit,
    loading
}: FormController) {

    const renderInputByComponentType = (formItem: FormField) => {

        let element = null;
        switch (formItem.componentType) {
            case 'input':
                element = (
                    <Input
                        className="border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-primary focus:border-primary"
                        id={formItem.name}
                        name={formItem.name}
                        type={formItem.type}
                        value={formData[formItem.name]}
                        onChange={e => setFormData({ ...formData, [formItem.name]: e.target.value })}
                    />
                );
                break;
            case 'textarea':
                element = (
                    <textarea
                        className="border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-primary focus:border-primary h-20"
                        id={formItem.name}
                        name={formItem.name}
                        value={formData[formItem.name]}
                        onChange={e => setFormData({ ...formData, [formItem.name]: e.target.value })}
                    />
                )
                break;
            default:
                return null
        }

        return element;
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-3 border border-zinc-100 p-4 rounded-md">
            <div className="flex flex-col gap-3">
                {
                    formControlls.map((formItem: FormField) => (
                        <div className="grid w-full gap-1">
                            <Label htmlFor={formItem.name} className="text-sm font-medium text-left" >{formItem.label}</Label>
                            {
                                renderInputByComponentType(formItem)
                            }
                        </div>
                    ))
                }
                <div className="flex justify-center">
                    {
                        loading ? <ButtonSpinner /> :
                            <Button type="submit" className="w-full mt-2">{onSumitText}</Button>
                    }
                </div>
            </div>
        </form>
    )
}

export default CommonForm