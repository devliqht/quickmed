<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class AppointmentReport extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'patient_record_id',
        'appointment_id',
        'doctor_id',
        'patient_id',
        'blood_pressure',
        'pulse_rate',
        'temperature',
        'respiratory_rate',
        'general_appearance',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'temperature' => 'decimal:2',
        'pulse_rate' => 'integer',
        'respiratory_rate' => 'integer',
    ];

    /**
     * Get the patient record that owns the appointment report.
     */
    public function patientRecord(): BelongsTo
    {
        return $this->belongsTo(PatientRecord::class);
    }

    /**
     * Get the appointment that owns the appointment report.
     */
    public function appointment(): BelongsTo
    {
        return $this->belongsTo(Appointment::class);
    }

    /**
     * Get the doctor that owns the appointment report.
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    /**
     * Get the patient that owns the appointment report.
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    /**
     * Get the prescription for the appointment report.
     */
    public function prescription(): HasOne
    {
        return $this->hasOne(Prescription::class);
    }
}