export class OnlineCourse {
    public courseName: string;
    public maxStudents: number;
    private enrolledStudents: number;
    private isOpen: boolean = true;
  
    constructor(courseName: string, maxStudents: number) {
      this.courseName = courseName;
      this.maxStudents = maxStudents;
      this.enrolledStudents = 0;
    }
  
    getCourseStatus(): string {
      return this.isOpen ? "Open" : "Closed";
    }
  
    private canEnroll(): boolean {
      return this.enrolledStudents < this.maxStudents;
    }
  
    enroll(): boolean {
      if (this.canEnroll() && this.isOpen) {
        this.enrolledStudents++;
        return true;
      }
      return false;
    }
  
    closeCourse(): void {
      this.isOpen = false;
    }
    getAvailableSeats(): number {
      return this.maxStudents - this.enrolledStudents;
    }
  }