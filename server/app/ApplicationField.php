<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ApplicationField extends Model
{
    protected $casts = [
        'configuration' => 'array'
    ];
}
