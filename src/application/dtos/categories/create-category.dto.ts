import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

enum CategoryName {
    Fiction = 'Fiction', // 1984 by George Orwell
    Psychology = 'Psychology', // Atomic Habits by James Clear
    Romance = 'Romance', // Great Big Beautiful Life by Emily Henry
    Business = 'Business', // The Lean Startup by Eric Ries
    Comics = 'Comics', // Watchmen by  Alan Moore
    Fantasy = 'Fantasy', // A Game of Thrones by George R.R. Martin
    Poetry = 'Poetry', // Leaves of Grass by Walt Whitman
    Philosophy = 'Philosophy', // Meditations by Marcus Aurelius
    Computer = 'Computer', // Clean Architecture by Robert C. Martin
    Thriller = 'Thriller', // Behind Closed Doors by B.A. Paris
}

export class CreateCategoryDto {
    @IsString()
    @IsEnum(CategoryName)
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;
}
