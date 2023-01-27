import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import route from "ziggy-js";
import {Resource} from "@/Types/Resource";
import {Patient} from "@/Types/Patient";

interface PatientIndexProps {
    patients: Array<Resource<Patient>>
}

const Index = (props: PatientIndexProps) => {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Patients</h2>}
        >
            <Head title="Patients"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead
                                className="text-xs uppercase ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Given Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Family Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.patients.map(patient => {
                                return <tr className="bg-white border-b" id={patient.resource.id}>
                                    <th scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap">
                                        {patient.resource.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {patient.resource.name[0].given}
                                    </td>
                                    <td className="px-6 py-4">
                                        {patient.resource.name[0].family}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href={route('patient.show', patient.resource.id)}>View</Link>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
