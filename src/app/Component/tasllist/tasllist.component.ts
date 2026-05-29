import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ─── Angular Material ───────────────────────────────────────
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { trigger, style, transition, animate } from '@angular/animations';

// ─── Interface ──────────────────────────────────────────────
export interface Task {
  id: number;
  name: string;
  department: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  assignee: string;
  avatarUrl: string;
  dueDate: Date;
  completed: boolean;
}

@Component({
  selector: 'app-tasllist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatBadgeModule,
    MatSnackBarModule,
  ],
  templateUrl: './tasllist.component.html',
  styleUrl: './tasllist.component.css',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('200ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class TasllistComponent implements OnInit {

  @ViewChild('taskDialog') taskDialogRef!: TemplateRef<any>;

  // ── Table ────────────────────────────────────────────────
  displayedColumns: string[] = ['completed', 'name', 'priority', 'assignee', 'dueDate', 'actions'];

  // ── State ────────────────────────────────────────────────
  activeNav = 'tasks';
  searchQuery = '';
  selectedTabIndex = 0;
  showFilterPanel = false;
  filterPriority = '';
  filterAssignee = '';
  notificationCount = 3;
  pageSize = 5;
  currentPage = 0;

  // ── Dialog ───────────────────────────────────────────────
  editingTask: Task | null = null;
  dialogTask: Partial<Task> = {};

  // ── Data ─────────────────────────────────────────────────
  allTasks: Task[] = [];
  filteredTasks: Task[] = [];

  get assignees(): string[] {
    return [...new Set(this.allTasks.map(t => t.assignee))];
  }

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // your init logic
  }

  onTabChange(index: number): void { }

  applySearch(): void { }

  applyFilters(): void { }

  toggleFilterPanel(): void { }

  clearFilters(): void { }

  onSortChange(sort: Sort): void { }

  onPageChange(event: PageEvent): void { }

  getShowingStart(): number { return 0; }

  getShowingEnd(): number { return 0; }

  toggleComplete(task: Task): void { }

  openAddTaskDialog(): void { }

  editTask(task: Task): void { }

  saveTask(): void { }

  deleteTask(task: Task): void { }

  isOverdue(date: Date): boolean { return false; }

  priorityOrder(p: string): number { return 0; }
}