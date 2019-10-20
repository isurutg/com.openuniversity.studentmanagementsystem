<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProgramAcademicSchedule extends Model
{
    protected $casts = [
        'fields' => 'array'
    ];
}
