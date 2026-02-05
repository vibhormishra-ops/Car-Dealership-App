import { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
export default function useURLParams(){
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateParam = useCallback(
        (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`/buy-used-cars?${params.toString()}`);
        },
        [searchParams, router]
    );
    const getParam=useCallback((key:string)=>searchParams.get(key)?? "",[searchParams]);
    return {updateParam, getParam};
}

