class User < ApplicationRecord

    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :password_digest, presence: true #:first_name, :last_name,
    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        end
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
    end

    def generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

end
