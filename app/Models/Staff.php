<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Staff extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'staff_type',
        'role',
    ];

    /**
     * Get the user that owns the staff.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
} 