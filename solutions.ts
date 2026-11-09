const multiplyValue = (value: number, multiplier?: number): number => {

    return value * (multiplier ?? 2)


}




const processInput = (value: string | number | boolean): string | number => {

    if (typeof value === 'string') {

        return value.trim().toLowerCase()
    }
    else if (typeof value === 'number') {

        return value * 10

    }
    else {


        return value ? "Active" : "Inactive"
    }

}



const formatCoordinate = (coordinate: readonly [number, number, string]): string => {

    const [latitude, longitude, location] =coordinate



    return `Location: ${location} (${latitude},${longitude})`

}




const concatenateArrays = <T>(...arrays: T[][]): T[] => {

    const result: T[] = []

    arrays.forEach((array) => {

        array.forEach((arr) => result.push(arr))

    })

    return result

}




interface Course {
    title: string
    students: number
    isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {

    const result = courses.filter((c) => c.isPublished && c.students >= minStudents)

    return result

}




const pluckValues = <T, K extends keyof T>(arrays: T[], key: K): T[K][] => {

    const result = arrays.map((obj) => obj[key])


    return result
}




class Employee {
    constructor(protected name: string, private baseSalary: number) {

    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary:${this.baseSalary}`
    }
}


class Manager extends Employee {

    constructor(name: string, baseSalary:number, private department: string) {
        super(name, baseSalary)
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`
    }

}



const validateAgeAsync =(age:number):Promise<string> =>{




    return new Promise((resolve, reject)=>{
        if(age<18){

            reject(new Error("Access Denied: Must be 18 or older"))
        }
        else{



            setTimeout(()=>{


                resolve("Access Granted")
            },1000)
        }
    })
}

