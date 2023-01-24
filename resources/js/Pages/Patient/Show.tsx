import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {AuthProps} from "../../Types/authProps";
import route from "ziggy-js";
import {Patient} from "../../Types/Patient";

interface PatientShowProps {
    patient: Patient
}

export default function Index(props: AuthProps & PatientShowProps) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Patients</h2>}
        >
            <Head title="Patient"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route('patient.index')}>Back</Link>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div>
                        ID: {props.patient.id}
                        </div>
                        <div>
                            First Name: {props.patient.name[0].given}
                        </div>
                        <div>
                            Family Name: {props.patient.name[0].family}
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
