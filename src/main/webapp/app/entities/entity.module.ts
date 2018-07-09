import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterappRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterappCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterappLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterappDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterappTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterappEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterappJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterappJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterappRegionMySuffixModule,
        JhipsterappCountryMySuffixModule,
        JhipsterappLocationMySuffixModule,
        JhipsterappDepartmentMySuffixModule,
        JhipsterappTaskMySuffixModule,
        JhipsterappEmployeeMySuffixModule,
        JhipsterappJobMySuffixModule,
        JhipsterappJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterappEntityModule {}
