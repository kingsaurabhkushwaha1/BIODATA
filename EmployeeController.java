package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.controller.dto.EmployeeDto;
import net.javaguides.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/employees")
public class EmployeeController {
    private EmployeeService employeeService;
    //Build Rest API FR Employee
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee( @RequestBody  EmployeeDto employeeDto){
         EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
   return  new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);

    }
    //Get All Employees by ID API
@GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById( @PathVariable("id") Long employeeId){
        EmployeeDto employeeDto = employeeService.getEmoloyeeById(employeeId);
        return ResponseEntity.ok(employeeDto);

    }
    //Get All Employees API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
      List<EmployeeDto> employees = employeeService.getAllEmployees();
      return ResponseEntity.ok(employees);
    }
      //Update Employees details
      @PutMapping("{id}")
      public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto updatedEmployee) {
          EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
          return ResponseEntity.ok(employeeDto);
      }
//Delete Employeen Rest API
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee Deleted successfully!");

    }


}
