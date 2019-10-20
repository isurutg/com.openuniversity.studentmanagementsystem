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
                    'field_name' => 'title',
                    'configuration' => json_encode([
                        "display_text" => 'Title',
                        "common_field" => true,
                        "type" => "select",
                        "values" => ['Mr', 'Miss', 'Mrs'],
                        "required" => true,
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'initials',
                    'configuration' => json_encode([
                        "display_text" => 'Initials',
                        "common_field" => true,
                        "type" => "text",
                        "required" => true,
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'last_name',
                    'configuration' => json_encode([
                        "display_text" => 'Last Name',
                        "common_field" => true,
                        "type" => "text",
                        "required" => true,
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'name_denoted_by_initials',
                    'configuration' => json_encode([
                        "display_text" => 'Name Denoted by Initials',
                        "common_field" => true,
                        "type" => "text",
                        "required" => true,
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'country',
                    'configuration' => json_encode([
                        "display_text" => 'Country/Nationality',
                        "common_field" => true,
                        "type" => "select",
                        "table" => "countries",
                        "required" => true,
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'nic',
                    'configuration' => json_encode([
                        "display_text" => 'NIC/Specific ID No.',
                        "common_field" => true,
                        "type" => "text",
                        "required" => true,
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'dob',
                    'configuration' => json_encode([
                        "display_text" => 'Date of Birth',
                        "common_field" => true,
                        "type" => "date",
                        "required" => true,
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'address_1',
                    'configuration' => json_encode([
                        "display_text" => 'Address line 1',
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'address_2',
                    'configuration' => json_encode([
                        "display_text" => 'Address line 2',
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'address_3',
                    'configuration' => json_encode([
                        "display_text" => 'Address line 3',
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'district',
                    'configuration' => json_encode([
                        "display_text" => 'District',
                        "common_field" => true,
                        "type" => "select",
                        "table" => "districts",
                        "required" => true,
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'contact_mob_1',
                    'configuration' => json_encode([
                        "display_text" => 'Contact No.-Mobile 01',
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'passport_no',
                    'configuration' => json_encode([
                        "display_text" => 'Passport Number',
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'passport_exp',
                    'configuration' => json_encode([
                        "display_text" => 'Pasport Exp Date',
                        "common_field" => true,
                        "type" => "date",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'entry_visa_no',
                    'configuration' => json_encode([
                        "display_text" => 'Entry Visa Number',
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'entry_visa_exp_date',
                    'configuration' => json_encode([
                        "display_text" => 'Entry Visa Exp Date',
                        "common_field" => true,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'birth_certificate_no',
                    'configuration' => json_encode([
                        "display_text" => 'Birth certificate number',
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'email',
                    'configuration' => json_encode([
                        "display_text" => 'Email',
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'contact_mob_2',
                    'configuration' => json_encode([
                        "display_text" => 'Contact No - Mobile 2',
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'contact_no_home',
                    'configuration' => json_encode([
                        "display_text" => 'Contact No - Home',
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'contact_no_work',
                    'configuration' => json_encode([
                        "display_text" => 'Contact No - Work',
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'correspondance_address',
                    'configuration' => json_encode([
                        "display_text" => 'Correspondance Address',
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                [
                    'field_name' => 'photo',
                    'configuration' => json_encode([
                        "display_text" => 'Upload Photo',
                        "common_field" => false,
                        "type" => "imagefile",
                        "multiple" => false,
                        "category" => "personal",
                        "section" => "2"
                    ]),
                ],
                // [
                //     'field_name' => 'documents',
                //     'configuration' => json_encode([
                //         "display_text" => 'Upload Documents/Certificate',
                //         "common_field" => false,
                //         "type" => "file",
                //         "multiple" => true
                //     ]),
                // ],
                [
                    'field_name' => 'postal_code',
                    'configuration' => json_encode([
                        "display_text" => 'Postal Code',
                        "common_field" => false,
                        "type" => "text",
                        "category" => "personal",
                        "section" => "1"
                    ]),
                ],
                // [
                //     'field_name' => 'special_needs',
                //     'configuration' => json_encode([
                //         "display_text" => 'Special Needs',
                //         "common_field" => false,
                //         "type" => "textarea",
                //         "category" => "personal",
                //         "section" => "1"
                //     ]),
                // ],
                // [
                //     'field_name' => 'ol',
                //     'configuration' => json_encode([
                //         "display_text" => 'O/L',
                //         "common_field" => false,
                //         "type" => "ol"
                //     ]),
                // ],
                // [
                //     'field_name' => 'al',
                //     'configuration' => json_encode([
                //         "display_text" => 'A/L',
                //         "common_field" => false,
                //         "type" => "al"
                //     ]),
                // ],
                // [
                //     'field_name' => 'ousl_foundation',
                //     'configuration' => json_encode([
                //         "display_text" => 'OUSL Foundation',
                //         "common_field" => false,
                //         "type" => "text"
                //     ]),
                // ],
                // [
                //     'field_name' => 'academic_qualification',
                //     'configuration' => json_encode([
                //         "display_text" => 'Academic Qualification',
                //         "common_field" => false,
                //         "type" => "text"
                //     ]),
                // ],
                // [
                //     'field_name' => 'professional_qualification',
                //     'configuration' => json_encode([
                //         "display_text" => 'Professional Qualification',
                //         "common_field" => false,
                //         "type" => "text"
                //     ]),
                // ],
                // [
                //     'field_name' => 'work_experience',
                //     'configuration' => json_encode([
                //         "display_text" => 'Work Experience',
                //         "common_field" => false,
                //         "type" => "text"
                //     ]),
                // ]
            ]
        );
    }
}
