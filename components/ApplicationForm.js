const ApplicationForm = {
    template: `
        <form @submit="handleSubmit" method="post" action="http://mercury.swin.edu.au/it000000/formtest.php">
        <fieldset>
      <legend class="mb-3 ">Personal Information</legend>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" v-model="form.firstName" class="form-control" />
          <span v-if="errors.firstName" class="error text-danger">{{ errors.firstName }}</span>
        </div>

        <div class="col-md-6">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" v-model="form.lastName" class="form-control" />
          <span v-if="errors.lastName" class="error text-danger">{{ errors.lastName }}</span>
        </div>
      </div>
    </fieldset>

    <!-- Username -->
    <div class="row mb-3">
      <div class="col-md-6">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" v-model="form.username" class="form-control" />
        <span v-if="errors.username" class="error text-danger">{{ errors.username }}</span>
      </div>

      <!-- Password -->
      <div class="col-md-6">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" v-model="form.password" class="form-control" />
        <span v-if="errors.password" class="error text-danger">{{ errors.password }}</span>
      </div>
    </div>

    <!-- Confirm Password -->
    <div class="row mb-3">
      <div class="col-md-6">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" v-model="form.confirmPassword" class="form-control" />
        <span v-if="errors.confirmPassword" class="error text-danger">{{ errors.confirmPassword }}</span>
      </div>

      <!-- Email -->
      <div class="col-md-6">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="form.email" class="form-control" />
        <span v-if="errors.email" class="error text-danger">{{ errors.email }}</span>
      </div>
    </div>

    <!-- Street Address -->
    <div class="row mb-3">
      <div class="col-md-6">
        <label for="streetAddress">Street Address:</label>
        <input type="text" id="streetAddress" name="streetAddress" v-model="form.streetAddress" class="form-control" />
        <span v-if="errors.streetAddress" class="error text-danger">{{ errors.streetAddress }}</span>
      </div>

      <!-- Suburb -->
      <div class="col-md-6">
        <label for="suburb">Suburb:</label>
        <input type="text" id="suburb" name="suburb" v-model="form.suburb" class="form-control" />
        <span v-if="errors.suburb" class="error text-danger">{{ errors.suburb }}</span>
      </div>
    </div>

    <!-- Postcode -->
    <div class="row mb-3">
      <div class="col-md-6">
        <label for="postcode">Postcode:</label>
        <input type="text" id="postcode" name="postcode" v-model="form.postcode" class="form-control" />
        <span v-if="errors.postcode" class="error text-danger">{{ errors.postcode }}</span>
      </div>

      <!-- Mobile Number -->
      <div class="col-md-6">
        <label for="mobileNumber">Mobile Number:</label>
        <input type="text" id="mobileNumber" name="mobileNumber" v-model="form.mobileNumber" class="form-control" />
        <span v-if="errors.mobileNumber" class="error text-danger">{{ errors.mobileNumber }}</span>
      </div>
    </div>

    <!-- Date of Birth -->
    <div class="row mb-3">
      <div class="col-md-6">
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" v-model="form.dob" class="form-control" />
        <span v-if="errors.dob" class="error text-danger">{{ errors.dob }}</span>
      </div>

      <!-- Preferred Job Category -->
      <div class="col-md-6">
        <label for="preferredJobCategory">Preferred Job Category:</label>
        <select id="preferredJobCategory" name="preferredJobCategory" v-model="form.preferredJobCategory" class="form-control">
          <option value="">Select Category</option>
          <option value="AI">AI</option>
          <option value="Data Science">Data Science</option>
          <option value="Web Development">Web Development</option>
        </select>
        <span v-if="errors.preferredJobCategory" class="error text-danger">{{ errors.preferredJobCategory }}</span>
      </div>
    </div>

    <!-- Terms and Conditions -->
    <div class="mb-3">
      <input type="checkbox" id="terms" v-model="form.terms" />
      <label for="terms">.  I agree to the terms and conditions</label>
      <button type="button" @click="toggleTermsVisibility" class="btn btn-link">View Terms</button>
      <p v-if="showTerms">By submitting this application, you agree to abide by the rules and regulations of the application process.
        Please ensure that all the information provided is accurate and true to the best of your knowledge.
        Any false or misleading information may lead to disqualification from the application process.</p>
      <span v-if="errors.terms" class="error text-danger">{{ errors.terms }}</span>
    </div>

    <!-- Submit Button -->
    <div class="mb-3">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>

        </form>


  `,

    data() {
        return {
            form: {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                confirmPassword: "",
                email: "",
                streetAddress: "",
                suburb: "",
                postcode: "",
                mobileNumber: "",
                dob: "",
                preferredJobCategory: "",
                terms: false
            },
            errors: {},
            showTerms: false
        };
    },
    methods: {
        handleSubmit: function(event) {
            this.errors = {};

            if (!this.validateForm()) {
                
                event.preventDefault();
            }


        },
        validateForm: function() {
            let valid = true;

            // Validate First Name (Letters only)
            if (!/^[a-zA-Z]+$/.test(this.form.firstName)) {
                this.errors.firstName = "First Name must only contain letters.";
                valid = false;
            }

            // Validate Last Name (Letters only)
            if (!/^[a-zA-Z]+$/.test(this.form.lastName)) {
                this.errors.lastName = "Last Name must only contain letters.";
                valid = false;
            }

            // Validate Username (Min 3 characters)
            if (this.form.username.length < 3) {
                this.errors.username = "Username must be at least 3 characters.";
                valid = false;
            }

            // Validate Password (Min 8 characters and special character)
            if (this.form.password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(this.form.password)) {
                this.errors.password = "Password must be at least 8 characters long and contain at least one special character.";
                valid = false;
            }

            // Validate Confirm Password
            if (this.form.password !== this.form.confirmPassword) {
                this.errors.confirmPassword = "Password and Confirm Password must match.";
                valid = false;
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.form.email)) {
                this.errors.email = "Please enter a valid email.";
                valid = false;
            }

            if (this.form.streetAddress.length > 40) {
                this.errors.streetAddress = "Street Address cannot be longer than 40 characters.";
                valid = false;
            }

            if (this.form.suburb.length > 20) {
                this.errors.suburb = "Suburb cannot be longer than 20 characters.";
                valid = false;
            }

            // Validate Postcode (4 digits)
            if (!/^\d{4}$/.test(this.form.postcode)) {
                this.errors.postcode = "Postcode must be exactly 4 digits.";
                valid = false;
            }

            // Validate Mobile Number (10 digits starting with 04)
            if (!/^04\d{8}$/.test(this.form.mobileNumber)) {
                this.errors.mobileNumber = "Mobile number must start with 04 and be 10 digits long.";
                valid = false;
            }

            // Validate Date of Birth (At least 16 years old)
            if (!this.form.dob) {
                this.errors.dob = "Date of Birth is required.";
                valid = false;
            } else {

                const dob = new Date(this.form.dob);
                const age = new Date().getFullYear() - dob.getFullYear();
                if (age < 16) {
                    this.errors.dob = "You must be at least 16 years old.";
                    valid = false;
                }
            }

            // Validate Preferred Job Category
            if (!this.form.preferredJobCategory) {
                this.errors.preferredJobCategory = "Please select a preferred job category.";
                valid = false;
            }

            // Validate Terms and Conditions
            if (!this.form.terms) {
                this.errors.terms = "You must agree to the terms and conditions.";
                valid = false;
            }

            return valid;
        },
        toggleTermsVisibility() {
            this.showTerms = !this.showTerms;
        }
    }
}