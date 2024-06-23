export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[index: string]: any;
};


export interface Directors extends Teacher {
	numberOfReports: number;
};


export function printTeacher(firstName: string, lastName: string): string{
	return `${firstName[0]. ${lastName}}`;
}


export interface IStudentClassConstructor{
	new (firstName: string, lastName: string): IStudentClass;
}


export interface IStudentClass{
	workOnHomework(): string;
	displayName(): string;
}


export class StudentClass implements IStudentClass{
	private _firstName!: string;
	private _lastName!: string;

	constructor(firstName: string, lastName: string){
		this._firstName = fistName;
		this._lastName = lastName;
	};
	
	workOnHomework(): string{
		return `currently working`;
	};

	displayName(): string{
		return this._firstName;
	}
}
