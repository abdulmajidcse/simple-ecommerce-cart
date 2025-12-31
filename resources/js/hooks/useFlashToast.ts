import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

interface FlashProps {
    success?: string;
    error?: string;
}

export default function useFlashToast() {
    const { flash } = usePage().props as { flash?: FlashProps };

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }

        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);
}
