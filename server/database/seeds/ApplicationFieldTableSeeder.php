<?php

use Illuminate\Database\Seeder;

class ApplicationFieldTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('application_fields')->insert(
            [
                [
                    'field_name' => 'Title',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "select",
                        "table" => "honorifics",
                        "required" => true,
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Initials',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "text",
                        "required" => true,
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Last Name',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "text",
                        "required" => true,
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Name Denoted by Initials',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "text",
                        "required" => true,
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Country/Nationality',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "select",
                        "table" => "country",
                        "required" => true,
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'NIC/Specific ID No.',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "text",
                        "required" => true,
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Date of Birth',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "date",
                        "required" => true,
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Address line 1',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "textarea",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Address line 2',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "textarea",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Address line 3',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "textarea",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'District',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "select",
                        "table" => "district",
                        "required" => true,
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Contact No.-Mobile 01',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Passport Number',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Pasport Exp Date',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "date",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Entry Visa Number',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Entry Visa Exp Date',
                    'configuration' => json_encode([
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Birth certificate number',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Email',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Contact No - Mobile 2',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Contact No - Home',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Contact No - Work',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Correspondance Address',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "textarea",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Upload Photo',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "imagefile",
                        "multiple" => false,
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Upload Documents/Certificate',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "file",
                        "multiple" => true
                    ]),
                ],
                [
                    'field_name' => 'Postal Code',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'Special Needs',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "textarea",
                        "category" => "personal"
                    ]),
                ],
                [
                    'field_name' => 'O/L',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "ol"
                    ]),
                ],
                [
                    'field_name' => 'A/L',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "al"
                    ]),
                ],
                [
                    'field_name' => 'OUSL Foundation',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text"
                    ]),
                ],
                [
                    'field_name' => 'Academic Qualification',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text"
                    ]),
                ],
                [
                    'field_name' => 'Professional Qualification',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text"
                    ]),
                ],
                [
                    'field_name' => 'Work Experience',
                    'configuration' => json_encode([
                        "common_field" => false,
                        "type" => "text"
                    ]),
                ]
            ]
        );
    }
}
