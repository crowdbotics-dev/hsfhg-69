import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sddjbjkwev_list = createAsyncThunk(
  "sddjbjkwevs/api_v1_sddjbjkwev_list",
  async payload => {
    const response = await apiService.api_v1_sddjbjkwev_list(payload)
    return response.data
  }
)
export const api_v1_sddjbjkwev_create = createAsyncThunk(
  "sddjbjkwevs/api_v1_sddjbjkwev_create",
  async payload => {
    const response = await apiService.api_v1_sddjbjkwev_create(payload)
    return response.data
  }
)
export const api_v1_sddjbjkwev_retrieve = createAsyncThunk(
  "sddjbjkwevs/api_v1_sddjbjkwev_retrieve",
  async payload => {
    const response = await apiService.api_v1_sddjbjkwev_retrieve(payload)
    return response.data
  }
)
export const api_v1_sddjbjkwev_update = createAsyncThunk(
  "sddjbjkwevs/api_v1_sddjbjkwev_update",
  async payload => {
    const response = await apiService.api_v1_sddjbjkwev_update(payload)
    return response.data
  }
)
export const api_v1_sddjbjkwev_partial_update = createAsyncThunk(
  "sddjbjkwevs/api_v1_sddjbjkwev_partial_update",
  async payload => {
    const response = await apiService.api_v1_sddjbjkwev_partial_update(payload)
    return response.data
  }
)
export const api_v1_sddjbjkwev_destroy = createAsyncThunk(
  "sddjbjkwevs/api_v1_sddjbjkwev_destroy",
  async payload => {
    const response = await apiService.api_v1_sddjbjkwev_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sddjbjkwevsSlice = createSlice({
  name: "sddjbjkwevs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_sddjbjkwev_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sddjbjkwev_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sddjbjkwev_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sddjbjkwev_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sddjbjkwev_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sddjbjkwev_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sddjbjkwev_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sddjbjkwev_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_sddjbjkwev_list,
  api_v1_sddjbjkwev_create,
  api_v1_sddjbjkwev_retrieve,
  api_v1_sddjbjkwev_update,
  api_v1_sddjbjkwev_partial_update,
  api_v1_sddjbjkwev_destroy,
  slice: sddjbjkwevsSlice
}
