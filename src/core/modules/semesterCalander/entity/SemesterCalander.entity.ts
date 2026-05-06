export type SemesterCalanderEntity = {
  semesterId: string;
  takeCourseStartsAt: Date;
  takeCourseEndsAt: Date;
  addRemoveCourseStartsAt: Date;
  addRemoveCourseEndsAt: Date;
  removeCourseRequestStartsAt: Date;
  removeCourseRequestEndsAt: Date;
  temproryScoringDeadLine: Date;
  permemantScoringDeadLine: Date;
};
