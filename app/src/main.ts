'use strict';

import 'reflect-metadata';
import {Container} from "inversify";
import {TYPES} from './Type'
import {ApiPeopleRepository} from "./Infrastructure/repository/ApiPeopleRepository";
import {RequestInterface} from "./Infrastructure/adapter/rest/RequestInterface";
import {RequestAdapter} from "./Infrastructure/adapter/rest/request";
import {PeopleRepositoryInterface} from "./Domain/Reposittory/PeopleRepositoryInterface";
import {PeopleAppService} from "./Application/services/PeopleAppService";
import {PeopleDomainService} from "./Domain/services/PeopleDomainService";
import {VehicleRepositoryInterface} from "./Domain/Reposittory/VehicleRepositoryInterface";
import {VehicleAppService} from "./Application/services/VehicleAppService";
import {DynamoVehicleRepository} from "./Infrastructure/repository/DynamoVehicleRepository";
import {VehicleDomainService} from "./Domain/services/VehicleDomainService";
import {MockApiPeopleRepository} from "./Infrastructure/mock/MockApiPeopleRepository";


const container: Container = new Container();

// Infrastructure
container.bind<RequestInterface>(TYPES.Request).to(RequestAdapter).inSingletonScope();
container.bind<PeopleRepositoryInterface>(TYPES.PeopleRepository).to(ApiPeopleRepository);
container.bind<VehicleRepositoryInterface>(TYPES.VehicleRepository).to(DynamoVehicleRepository).inSingletonScope();

// Application
container.bind<PeopleAppService>(TYPES.PeopleAppService).to(PeopleAppService).inSingletonScope();
container.bind<VehicleAppService>(TYPES.VehicleAppService).to(VehicleAppService).inSingletonScope();

// Domain
container.bind<PeopleDomainService>(TYPES.PeopleDomainService).to(PeopleDomainService).inSingletonScope();
container.bind<VehicleDomainService>(TYPES.VehicleDomainService).to(VehicleDomainService).inSingletonScope();


// MOCK CLASS
container.bind<MockApiPeopleRepository>(TYPES.MockPeopleRepository).to(MockApiPeopleRepository);



// Infrastructure
// container.bind<PeopleRepositoryInterface>(TYPES.MockPeopleRepository).to(PeopleRepositoryMock).inSingletonScope();

// Application
// container.bind<PeopleAppService>('MockPeopleAppService').to(PeopleAppService).inSingletonScope();

export default container;