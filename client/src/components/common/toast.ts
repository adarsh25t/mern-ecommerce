import { toast } from "@/hooks/use-toast";



export const toastMessage = (message: string, color: string = 'black') => (
    toast({
        type: 'foreground',
        title: message,
        style: {
            color: color
        }
    })
)