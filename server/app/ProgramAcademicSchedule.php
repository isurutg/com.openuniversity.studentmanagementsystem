<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProgramAcademicSchedule extends Model
{
    protected $casts = [
        'fields' => 'array'
    ];

    public function program()
    {
        return $this->belongsTo('App\Program');
    }

    public function academicSchedule()
    {
        return $this->belongsTo('App\AcademicSchedule');
    }
}
