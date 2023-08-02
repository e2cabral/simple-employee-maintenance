export class EmployeeDTO {
  constructor (
    public _id: string,
    public firstName: string,
    public lastName: string,
    public hireDate: string,
    public department: string[],
    public phone: string,
    public address: string
  ) {}
}
