export interface AviationStackPagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface AviationStackDepartureArrival {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string | null;
  gate: string | null;
  delay: number | null;
  scheduled: string;
  estimated: string;
  actual: string | null;
  estimated_runway: string | null;
  actual_runway: string | null;
  baggage?: string | null;
}

export interface AviationStackAirline {
  name: string;
  iata: string;
  icao: string;
}

export interface AviationStackFlightInfo {
  number: string;
  iata: string;
  icao: string;
  codeshared: any | null;
}

export interface AviationStackAircraft {
  registration: string;
  iata: string;
  icao: string;
  icao24: string;
}

export interface AviationStackLive {
  updated: string;
  latitude: number;
  longitude: number;
  altitude: number;
  direction: number;
  speed_horizontal: number;
  speed_vertical: number;
  is_ground: boolean;
}

export interface AviationStackFlight {
  flight_date: string;
  flight_status: string;
  departure: AviationStackDepartureArrival;
  arrival: AviationStackDepartureArrival;
  airline: AviationStackAirline;
  flight: AviationStackFlightInfo;
  aircraft: AviationStackAircraft | null;
  live: AviationStackLive | null;
}

export interface AviationStackResponse {
  pagination: AviationStackPagination;
  data: AviationStackFlight[];
}
