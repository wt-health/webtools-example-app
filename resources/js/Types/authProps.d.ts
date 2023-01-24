import {PageProps} from "@inertiajs/inertia";

export interface AuthProps extends PageProps{
    auth: {
        user: unknown
    }
}
