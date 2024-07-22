using {batch2Project as dbTables} from '../db/data-model';



service school{
    entity Students as projection on dbTables.Students;
    entity StudentMarks as projection on dbTables.StudentMarks;
    entity StudentFees as projection on dbTables.StudentFees;
}