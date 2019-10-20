<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $casts = [
        'data' => 'array'
    ];

    public function programSchedule()
    {
        return $this->belongsTo('App\ProgramAcademicSchedule', 'academic_schedule_id');
    }
}
