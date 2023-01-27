<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class PatientController extends Controller
{
    public function index(): Response
    {
        $patientsResponse = Http::withHeaders([
            'accept' => 'application/fhir+json',
        ])->get('https://hapi.fhir.org/baseR4/Patient');

        $patients = $patientsResponse->json()['entry'];

        return Inertia::render('Patient/Index', [
            'patients' => $patients,
        ]);
    }

    public function show(string $id): Response
    {
        $patientsResponse = Http::withHeaders([
            'accept' => 'application/fhir+json',
        ])->get("https://hapi.fhir.org/baseR4/Patient/$id");

        $patient = $patientsResponse->json();

        return Inertia::render('Patient/Show', [
            'patient' => $patient,
        ]);
    }
}
